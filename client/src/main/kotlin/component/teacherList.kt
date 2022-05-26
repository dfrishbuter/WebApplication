package component

import kotlinext.js.jso
import react.Props
import react.dom.*
import react.fc
import react.query.useQuery
import react.router.dom.Link
import ru.altmanea.edu.server.model.Config
import ru.altmanea.edu.server.model.Item
import ru.altmanea.edu.server.model.Teacher
import wrappers.AxiosResponse
import wrappers.QueryError
import wrappers.axios

external interface TeacherListProps : Props {
    var teachers: List<Item<Teacher>>
}

fun fcTeacherList() = fc("TeacherList") { props: TeacherListProps ->
    h3 { + "Teachers" }
    ol {
        props.teachers.map { teacherItem ->
            li {
                Link {
                    attrs.to = "${Config.workPlansByTeacherCommonPath}/${teacherItem.uuid}"
                    + "${teacherItem.elem.firstName} ${teacherItem.elem.lastName} ${teacherItem.elem.patronymic} \t"
                }
            }
        }
    }
}

fun fcContainerTeacherList() = fc("QueryTeacherList") { _: Props ->
    val query = useQuery<Any, QueryError, AxiosResponse<Array<Item<Teacher>>>, Any>("teacherList", {
            axios<Array<Teacher>>(jso {
                url = Config.teachersURL
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
