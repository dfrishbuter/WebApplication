package ru.altmanea.edu.server.rest

import io.ktor.application.*
import io.ktor.http.*
import io.ktor.response.*
import io.ktor.routing.*
import ru.altmanea.edu.server.model.Config
import ru.altmanea.edu.server.repo.subjectsRepo

fun Route.subject() =
    route(Config.subjectsPath) {
        get {
            if (!subjectsRepo.isEmpty()) {
                call.respond(subjectsRepo.findAll())
            } else {
                call.respondText("No subjects found", status = HttpStatusCode.NotFound)
            }
        }
        get("{id}") {
            val id = call.parameters["id"] ?: return@get call.respondText(
                "Missing or malformed id",
                status = HttpStatusCode.BadRequest
            )
            val teacherItem =
                subjectsRepo[id] ?: return@get call.respondText(
                    "No subject with id $id found",
                    status = HttpStatusCode.NotFound
                )
            call.respond(teacherItem)
        }
    }

