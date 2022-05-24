package ru.altmanea.edu.server.rest

import io.ktor.application.*
import io.ktor.http.*
import io.ktor.server.testing.*
import org.junit.Test
import ru.altmanea.edu.server.main
import ru.altmanea.edu.server.model.Config
import ru.altmanea.edu.server.model.Group

import kotlin.test.assertEquals
// тесты для проверки работоспособности маршрутов и проверки что мы получаем то что хотели увидеть
internal class StudentsKtTest {
    @Test
    fun testStudentRoute() {
        withTestApplication(Application::main) {

//            val groupItems = handleRequest(HttpMethod.Get, Config.groupsPath).run {
//                assertEquals(HttpStatusCode.OK, response.status())
//                decodeBody<List<Group>>()
//            }
//            assertEquals(2, groupItems.size)
//            val groupM = groupItems.find { it.group == "29z" }
//            check(groupM != null)
//
//            handleRequest(HttpMethod.Get, Config.groupsPath +"29z").run {
//                assertEquals(HttpStatusCode.OK, response.status())
//                assertEquals("29z", decodeBody<Group>().group)
//            }
//            handleRequest(HttpMethod.Get, Config.groupsPath + "20i").run {
//                assertEquals(HttpStatusCode.NotFound, response.status())
//            }
//            //доп через аргументы формы
//            handleRequest(HttpMethod.Get, Config.groupsPath + "test2" + "?group=29m").run {
//                assertEquals(HttpStatusCode.OK, response.status())
//                assertEquals("29m", decodeBody<Group>().group)
//            }
//            //доп через тело запроса
//            handleRequest(HttpMethod.Get, Config.groupsPath + "test1"){
//                addHeader(HttpHeaders.ContentType, ContentType.Application.FormUrlEncoded.toString())
//                setBody(listOf("group" to "29m").formUrlEncode()) //параметры задаются списком пар
//            }.run {
//                assertEquals(HttpStatusCode.OK, response.status())
//                assertEquals("29m", decodeBody<Group>().group)
//            }

        }
    }
}