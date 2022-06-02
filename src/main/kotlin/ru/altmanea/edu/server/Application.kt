package ru.altmanea.edu.server

import io.ktor.application.*
import io.ktor.features.*
import io.ktor.routing.*
import io.ktor.serialization.*
import io.ktor.server.engine.*
import io.ktor.server.netty.*
import org.apache.poi.ss.usermodel.WorkbookFactory
import ru.altmanea.edu.server.model.Config
import ru.altmanea.edu.server.repo.*
import ru.altmanea.edu.server.rest.*
import java.io.FileInputStream

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
    install(ContentNegotiation) {
        json()
    }
    routing {
        import { fileUrl ->
            val stream = FileInputStream(fileUrl)
            var workbook = WorkbookFactory.create(stream)
            val controller = Controller(workbook, 0)
            val workPlansTestData = controller.getWorkPlans()

            val teachers = workPlansTestData.map { it.teacher }.distinctBy { it.firstName + it.lastName + it.patronymic }
            teachers.forEach { teachersRepo.create(it) }

            val groups = workPlansTestData.map { it.groups.toList() }.flatten().distinctBy { it.code + it.formOfEducation }
            groups.forEach { groupsRepo.create(it) }

            val subjects = workPlansTestData.map { it.subject }.distinct()
            subjects.forEach { subjectsRepo.create(it) }

            workPlansTestData.forEach { workPlansRepo.create(it) }
        }
        teacher()
        group() // надо объявить маршуты, поэтому прописываем здесь их
        subject()
        workPlanByTeacher()
        workPlanByGroup()
        workPlanBySubject()
        index()
    }
}
