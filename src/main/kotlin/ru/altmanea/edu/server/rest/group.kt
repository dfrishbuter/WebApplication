package ru.altmanea.edu.server.rest

import io.ktor.application.*
import io.ktor.http.*
import io.ktor.response.*
import io.ktor.routing.*
import ru.altmanea.edu.server.model.Config.Companion.groupsPath
import ru.altmanea.edu.server.repo.groupsRepo

fun Route.group() =
    route(groupsPath) {
        get {
            if (!groupsRepo.isEmpty()) {
                call.respond(groupsRepo.findAll())
            } else {
                call.respondText("No groups found", status = HttpStatusCode.NotFound)
            }
        }
    }