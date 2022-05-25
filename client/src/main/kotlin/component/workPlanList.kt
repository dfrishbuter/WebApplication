package component

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
import wrappers.AxiosResponse
import wrappers.QueryError
import wrappers.axios

external interface WorkPlanListProps : Props {
    var workPlans: List<Item<WorkPlan>>
}

//val id: String,
//val faculty: String,
//val block: String,
//val subject: String,
//val semester: Int,
//val teacher: Teacher,
//val groups: List<Group>,
//var numberOfStudents: Int,
//val typeOfLoad: String,
//val hours: Float,
//val typeOfEmployment: String

fun fcWorkPlanList() = fc("WorkPlanList") { props: WorkPlanListProps ->
    table {
        props.workPlans.mapIndexed { index, workPlan ->
            h3 { + "Work Plans" }
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
                    + workPlan.elem.groups.joinToString { "${it.code} ${it.name}, ${it.formOfEducation};\n" }
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