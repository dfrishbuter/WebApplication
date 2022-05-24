package component

import kotlinext.js.jso
import react.Props
import react.dom.div
import react.dom.h3
import react.dom.li
import react.dom.ol
import react.fc
import react.query.useQuery
import react.query.useQueryClient
import react.router.dom.Link
import ru.altmanea.edu.server.model.Config
import ru.altmanea.edu.server.model.Group
import ru.altmanea.edu.server.model.Item
import wrappers.AxiosResponse
import wrappers.QueryError
import wrappers.axios

external interface SubjectListProps : Props {
    var subjects: List<Item<String>>
}

fun fcSubjectList() = fc("SubjectList") { props: SubjectListProps ->
    h3 { + "Subjects" }
    ol {
        props.subjects.mapIndexed { index, subjectItem ->
            li {
                val subject = subjectItem.elem
                Link {
                    attrs.to = "/groups/${subjectItem.uuid}"
                    + "$subject \t"
                }
            }
        }
    }
}

fun fcContainerSubjectList() = fc("QuerySubjectList") { _: Props ->
    val queryClient = useQueryClient()

    val query = useQuery<Any, QueryError, AxiosResponse<Array<Item<String>>>, Any>( // хук, предоставляющий поступ к функциям квери провайдера
        "subjectList",
        {
            axios<Array<String>>(jso {
                url = Config.subjectsURL
            })
        }
    )

    if (query.isLoading) div { + "Loading .." }
    else if (query.isError) div { + "Error!" }
    else {
        val items = query.data?.data?.toList() ?: emptyList()
        child(fcSubjectList()) {
            attrs.subjects = items
        }
    }
}

