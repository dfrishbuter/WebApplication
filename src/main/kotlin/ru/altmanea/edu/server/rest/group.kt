package ru.altmanea.edu.server.rest

import io.ktor.application.*
import io.ktor.http.*
import io.ktor.http.cio.*
import io.ktor.request.*
import io.ktor.response.*
import io.ktor.routing.*
import ru.altmanea.edu.server.model.Config.Companion.groupsPath
import ru.altmanea.edu.server.repo.groupsRepo

fun Route.group() =
    route(groupsPath) {
        // Returns list of students
        get {
            if (!groupsRepo.isEmpty()) {
                call.respond(groupsRepo)
            } else {
                call.respondText("No groups found", status = HttpStatusCode.NotFound)
            }
        }
        // Returns specified group by its name {group}
        get("{group}") {
            val group = call.parameters["group"] ?: return@get call.respondText(
                "Missing or malformed id",
                status = HttpStatusCode.BadRequest
            )
            val groupItem =
                groupsRepo.find { it.name == group } ?: return@get call.respondText(
                    "No group with id $group",
                    status = HttpStatusCode.NotFound
                )
            call.respond(groupItem)
        }
        // дальше доп ко второй лабе, тебе не нужен
        // через тело запроса
        get("test1") {
            val formParameters = call.receiveParameters() //получаем параметры формы
            val group = formParameters["group"] ?: return@get call.respondText(
                "Missing or malformed group",
                status = HttpStatusCode.BadRequest
            )
            val groupItem =
                groupsRepo.find { it.name == group} ?: return@get call.respondText(
                    "No group with id $group",
                    status = HttpStatusCode.NotFound
                )
            call.respond(groupItem)
        }
        // через аргументы формы
        get ("test2"){
            // с помощью queryParameters получаем доступ к параметрам запроса
            val group = call.request.queryParameters["group"]  ?: return@get call.respondText(
                "Missing or malformed group",
                status = HttpStatusCode.BadRequest
            )
            val groupItem =
                groupsRepo.find { it.name == group} ?: return@get call.respondText(
                    "No group with id $group",
                    status = HttpStatusCode.NotFound
                )
            call.respond(groupItem)
        }
    }