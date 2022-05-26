package component

import kotlinext.js.jso
import react.Props
import react.dom.div
import react.dom.h3
import react.dom.li
import react.dom.ol
import react.fc
import react.query.useQuery
import react.router.dom.Link
import ru.altmanea.edu.server.model.Config
import ru.altmanea.edu.server.model.Group
import ru.altmanea.edu.server.model.Item
import wrappers.AxiosResponse
import wrappers.QueryError
import wrappers.axios

external interface GroupListProps : Props {
    var groups: List<Item<Group>>
}

fun fcGroupList() = fc("GroupList") { props: GroupListProps ->
    h3 { + "Groups" }
    ol {
        props.groups.map { groupItem ->
            li {
                Link {
                    attrs.to = "${Config.workPlansByGroupCommonPath}/${groupItem.uuid}"
                    + "${groupItem.elem.code} ${groupItem.elem.name}, ${groupItem.elem.formOfEducation} \t"
                }
            }
        }
    }
}

fun fcContainerGroupList() = fc("QueryGroupList") { _: Props ->
    val query = useQuery<Any, QueryError, AxiosResponse<Array<Item<Group>>>, Any>("groupList", {
            axios<Array<Group>>(jso {
                url = Config.groupsURL
            })
        }
    )

    if (query.isLoading) div { + "Loading .." }
    else if (query.isError) div { + "Error!" }
    else {
        val items = query.data?.data?.toList() ?: emptyList()
        child(fcGroupList()) {
            attrs.groups = items
        }
    }
}