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
    }
