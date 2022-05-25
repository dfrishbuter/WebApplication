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
import ru.altmanea.edu.server.model.Item
import ru.altmanea.edu.server.model.WorkPlan
import ru.altmanea.edu.server.model.Config.Companion.workPlansURL
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
            th {
                + "Ученое звание"
            }
            th {
                + "Ученая степень"
            }
        }
        props.workPlans.mapIndexed { index, workPlan ->
            tr {
                td {
                    + "${index + 1}"
                }
                td {
                    +"${workPlan.elem.id}"
                }
                td {
                    + "${workPlan.elem.faculty}"
                }
                td {
                    + "${workPlan.elem.block}"
                }
                td {
                    + "${workPlan.elem.subject}"
                }
                td {
                    + "${workPlan.elem.semester}"
                }
                td {
                    + "${workPlan.elem.teacher.firstName} ${workPlan.elem.teacher.lastName} ${workPlan.elem.teacher.patronymic}"
                }
                td {
//                    var groupsString = ""
//                    workPlan.elem.groups.forEach {
//                        groupsString += "${it.code} ${it.name}, ${it.formOfEducation};\n"
//                    }
                    + workPlan.elem.groups.first().name
                }
                td {
                    + "${workPlan.elem.numberOfStudents}"
                }
                td {
                    + "${workPlan.elem.typeOfLoad}"
                }
                td {
                    + "${workPlan.elem.hours}"
                }
                td {
                    + "${workPlan.elem.typeOfEmployment}"
                }
            }
        }
    }
}

fun fcContainerWorkPlanList() = fc("QueryWorkPlanList") { _: Props ->
    val queryClient = useQueryClient()

    val query = useQuery<Any, QueryError, AxiosResponse<Array<Item<WorkPlan>>>, Any>(
        "workPlanList",
        {
            axios<Array<WorkPlan>>(jso {
                url = workPlansURL
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