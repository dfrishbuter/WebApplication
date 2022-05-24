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
                val teacher = Teacher(teacherItem.elem.name)
                Link {
                    attrs.to = "/teachers/${teacherItem.uuid}"
                    +"${teacher.name} \t"
                }
            }
        }
    }
}

fun fcContainerTeacherList() = fc("QueryTeacherList") { _: Props ->
    val queryClient = useQueryClient()

    val query = useQuery<Any, QueryError, AxiosResponse<Array<Item<Teacher>>>, Any>( // хук, предоставляющий поступ к функциям квери провайдера
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
