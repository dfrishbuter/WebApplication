package ru.altmanea.edu.server.rest

import io.ktor.application.*
import io.ktor.http.*
import io.ktor.response.*
import io.ktor.routing.*
import ru.altmanea.edu.server.model.Config.Companion.teachersPath
import ru.altmanea.edu.server.repo.teachersRepo

fun Route.teacher() =
    route(teachersPath) {
        get {
            if (!teachersRepo.isEmpty()) {
                call.respond(teachersRepo.findAll())
            } else {
                call.respondText("No teachers found", status = HttpStatusCode.NotFound)
            }
        }
        get("{id}") {
            val id = call.parameters["id"] ?: return@get call.respondText(
                "Missing or malformed id",
                status = HttpStatusCode.BadRequest
            )
            val teacherItem =
                teachersRepo[id] ?: return@get call.respondText(
                    "No teacher with id $id found",
                    status = HttpStatusCode.NotFound
                )
            call.respond(teacherItem)
        }
    }
