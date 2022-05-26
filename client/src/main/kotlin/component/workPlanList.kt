package component

import csstype.Border
import csstype.BorderCollapse
import csstype.BorderCollapse.Companion.collapse
import csstype.WhiteSpace
import csstype.px
import kotlinx.css.border
import react.*
import react.dom.*
import styled.*

import kotlinext.js.jso
import react.Props
import react.RBuilder
import react.dom.*
import react.fc
import react.query.useQuery
import react.query.useQueryClient
import react.router.useParams
import ru.altmanea.edu.server.model.Config
import ru.altmanea.edu.server.model.Item
import ru.altmanea.edu.server.model.WorkPlan
import styled.styledTable
import wrappers.AxiosResponse
import wrappers.QueryError
import wrappers.axios

external interface WorkPlanListProps : Props {
    var workPlans: List<Item<WorkPlan>>
}

fun fcWorkPlanList() = fc("WorkPlanList") { props: WorkPlanListProps ->
    val borderStyle = "border: 2px solid #095484;"
    h3 { + "Work Plans" }

    styledTable {
        css {
            descendants( "th", "td") {
                border = "1px solid black"
            }
            collapse
        }
        tr {
            th {
                + "№"
            }
            th {
                + "Рабочий план"
            }
            th {
                + "Факультет"
            }
            th {
                + "Блок"
            }
            th {
                + "Дисциплина (вид учебной работы)"
            }
            th {
                + "Семестр"
            }
            th {
                + "Группа"
            }
            th {
                + "Кол-во обучающихся"
            }
            th {
                + "Вид нагрузки"
            }
            th {
                + "Нагрузка, часов"
            }
            th {
                + "Преподаватель"
            }
            th {
                + "Вид занятости, ставка"
            }
        }
        props.workPlans.mapIndexed { index, workPlan ->
            tr {
                td { // "№"
                    + "${index + 1}"
                }
                td { // "Рабочий план"
                    +"${workPlan.elem.id}"
                }
                td { // "Факультет"
                    + "${workPlan.elem.faculty}"
                }
                td {
                    + "${workPlan.elem.block}" // "Блок"
                }
                td { // "Дисциплина (вид учебной работы)"
                    + "${workPlan.elem.subject}"
                }
                td { // "Семестр"
                    + "${workPlan.elem.semester}"
                }
                td { // "Группа"
                    + workPlan.elem.groups.joinToString(
                        separator = ";\n",
                        transform = { "${it.code} ${it.name}, ${it.formOfEducation}" }
                    )
                }
                td { // "Кол-во обучающихся"
                    + "${workPlan.elem.numberOfStudents}"
                }
                td { // "Вид нагрузки"
                    + "${workPlan.elem.typeOfLoad}"
                }
                td { // "Нагрузка, часов"
                    + "${workPlan.elem.hours}"
                }
                td { // "Преподаватель"
                    +"${workPlan.elem.teacher.firstName} ${workPlan.elem.teacher.lastName} ${workPlan.elem.teacher.patronymic}"
                }
                td { // "Вид занятости, ставка"
                    + "${workPlan.elem.typeOfEmployment}"
                }
            }
        }
    }
}

fun fcContainerWorkPlanList(lastPathComponent: String) = fc("QueryWorkPlanList") { _: Props ->
    val workPlanParams = useParams()

    val id = workPlanParams["id"] ?: "Route param error"
    val query = useQuery<Any, QueryError, AxiosResponse<Array<Item<WorkPlan>>>, Any>(id, {
            axios<Array<WorkPlan>>(jso {
                url = "${Config.workPlansBaseURL}$lastPathComponent/$id"
            })
        }
    )

    if (query.isLoading) div { + "Loading .." }
    else if (query.isError) div { + "Error!" }
    else {
        val items = query.data?.data?.toList() ?: emptyList()
        child(fcWorkPlanList()) {
            attrs.workPlans = items
        }
    }
}