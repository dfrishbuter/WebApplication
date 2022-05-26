package ru.altmanea.edu.server

import io.ktor.application.*
import io.ktor.features.*
import io.ktor.routing.*
import io.ktor.serialization.*
import io.ktor.server.engine.*
import io.ktor.server.netty.*
import ru.altmanea.edu.server.model.Config
import ru.altmanea.edu.server.repo.*
import ru.altmanea.edu.server.rest.*

fun main() {
    embeddedServer(
        Netty,
        port = Config.serverPort,
        host = Config.serverDomain,
        watchPaths = listOf("classes", "resources")
    ) {
        main()
    }.start(wait = true)
}

fun Application.main(test: Boolean = true) {
    if (test) {
        val teachers = workPlansTestData.map { it.teacher }.distinctBy { it.firstName + it.lastName + it.patronymic }
        teachers.forEach { teachersRepo.create(it) }

        val groups = workPlansTestData.map { it.groups }.flatten().distinctBy { it.code + it.formOfEducation }
        groups.forEach { groupsRepo.create(it) }

//        groupsRepo.findAll().forEach { groupItem ->
//            println("${groupItem.elem.code} ${groupItem.elem.name}, ${groupItem.elem.formOfEducation} \t")
//        }

        val subjects = workPlansTestData.map { it.subject }.distinct()
        subjects.forEach { subjectsRepo.create(it) }

        workPlansTestData.forEach { workPlansRepo.create(it) }
    }
    install(ContentNegotiation) {
        json()
    }
    routing {
        teacher()
        group() // надо объявить маршуты, поэтому прописываем здесь их
        subject()
        workPlanByTeacher()
        workPlanByGroup()
        workPlanBySubject()
        index()
    }
}