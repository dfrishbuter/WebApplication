package ru.altmanea.edu.server.rest

import io.ktor.application.*
import io.ktor.http.*
import io.ktor.response.*
import io.ktor.routing.*
import ru.altmanea.edu.server.model.Config
import ru.altmanea.edu.server.repo.groupsRepo
import ru.altmanea.edu.server.repo.teachersRepo
import ru.altmanea.edu.server.repo.subjectsRepo
import ru.altmanea.edu.server.repo.workPlansRepo

fun Route.workPlanByTeacher() =
    route(Config.workPlansByTeacherPath) {
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
        get("{group}") {
            val groupId = call.parameters["group"] ?: return@get call.respondText(
                "Missing or malformed id",
                status = HttpStatusCode.BadRequest
            )
            val group = groupsRepo[groupId] ?: return@get call.respondText(
                "No teacher with id $groupId",
                status = HttpStatusCode.NotFound
            )
            val workPlanItem = workPlansRepo.find { it -> it.groups.any { it.code == group.elem.code } }
            call.respond(workPlanItem)
        }
    }

fun Route.workPlanBySubject() =
    route(Config.workPlansBySubjectPath) {
        get("{subject}") {
            val subjectId = call.parameters["subject"] ?: return@get call.respondText(
                "Missing or malformed id",
                status = HttpStatusCode.BadRequest
            )
            val subject = subjectsRepo[subjectId] ?: return@get call.respondText(
                "No teacher with id $subjectId",
                status = HttpStatusCode.NotFound
            )
            val workPlanItem = workPlansRepo.find { it.subject == subject.elem }
            call.respond(workPlanItem)
        }
    }