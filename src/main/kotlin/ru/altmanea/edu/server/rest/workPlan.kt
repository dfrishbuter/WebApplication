package ru.altmanea.edu.server.rest

import io.ktor.application.*
import io.ktor.http.*
import io.ktor.response.*
import io.ktor.routing.*
import ru.altmanea.edu.server.model.Config
import ru.altmanea.edu.server.repo.teachersRepo
import ru.altmanea.edu.server.repo.urlByUUID
import ru.altmanea.edu.server.repo.workPlansRepo

fun Route.workPlanByTeacher() =
    route(Config.workPlansByTeacherPath) {
        get {
            if (!workPlansRepo.isEmpty()) {
                call.respond(workPlansRepo.findAll())
            } else {
                call.respondText("No work plans found", status = HttpStatusCode.NotFound)
            }
        }
        get("{teacher}") {
            val teacherId = call.parameters["teacher"] ?: return@get call.respondText(
                "Missing or malformed id",
                status = HttpStatusCode.BadRequest
            )
            val teacher = teachersRepo[teacherId] ?: return@get call.respondText(
                "No teacher with id $teacherId",
                status = HttpStatusCode.NotFound
            )
            val workPlanItem = workPlansRepo.find { it.teacher.lastName == teacher.elem.lastName }
            call.respond(workPlanItem)
        }
    }

fun Route.workPlanByGroup() =
    route(Config.workPlansByGroupPath) {
        get {
            if (!workPlansRepo.isEmpty()) {
                call.respond(workPlansRepo.findAll())
            } else {
                call.respondText("No work plans found", status = HttpStatusCode.NotFound)
            }
        }
    }

fun Route.workPlanBySubject() =
    route(Config.workPlansBySubjectPath) {
        get {
            if (!workPlansRepo.isEmpty()) {
                call.respond(workPlansRepo.findAll())
            } else {
                call.respondText("No work plans found", status = HttpStatusCode.NotFound)
            }
        }
    }