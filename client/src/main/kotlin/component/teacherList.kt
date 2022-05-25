package component

import kotlinext.js.jso
import react.Props
import react.dom.*
import react.fc
import react.query.useQuery
import react.query.useQueryClient
import react.router.dom.Link
import ru.altmanea.edu.server.model.Item
import ru.altmanea.edu.server.model.Teacher
import ru.altmanea.edu.server.model.Config.Companion.teachersURL
import wrappers.AxiosResponse
import wrappers.QueryError
import wrappers.axios

external interface TeacherListProps : Props {
    var teachers: List<Item<Teacher>>
}

fun fcTeacherList() = fc("TeacherList") { props: TeacherListProps ->
    h3 { + "Teachers" }
    ol {
        props.teachers.mapIndexed { index, teacherItem ->
            li {
                val teacher = Teacher(teacherItem.elem.firstName, teacherItem.elem.lastName, teacherItem.elem.patronymic)
                Link {
                    attrs.to = "/work_plans"
                    // Как отсюда правильно перейти к списку планов?
                    // Как сформировать ссылку и отфильтровать планы по преподавателю?
                    + "${teacher.firstName} ${teacher.lastName} ${teacher.patronymic} \t"
                }
            }
        }
    }
}

fun fcContainerTeacherList() = fc("QueryTeacherList") { _: Props ->
    val query = useQuery<Any, QueryError, AxiosResponse<Array<Item<Teacher>>>, Any>(
        "teacherList",
        {
            axios<Array<Teacher>>(jso {
                url = teachersURL
            })
        }
    )

    if (query.isLoading) div { + "Loading .." }
    else if (query.isError) div { + "Error!" }
    else {
        val items = query.data?.data?.toList() ?: emptyList()
        child(fcTeacherList()) {
            attrs.teachers = items
        }
    }
}
