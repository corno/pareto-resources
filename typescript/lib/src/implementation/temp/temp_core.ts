import * as p_temp from 'pareto-core/dist/assign'
import * as p_di from 'pareto-core/dist/interface/data'
import p_list_build_deprecated from 'pareto-core/dist/implementation/specials/list_build_deprecated'

//data types

export const remove_last_element = <T extends p_di.Value>(list: p_di.List<T>): p_di.List<T> => {
    const length = p_temp.number.from.list(list).amount_of_items()
    let index = -1
    return p_list_build_deprecated(($i) => {
        list.__l_map(($) => {
            index += 1
            if (index < length - 1) {
                $i['add item']($)
            }
            return null
        })
    })
}