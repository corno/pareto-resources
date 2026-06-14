import * as pt from 'pareto-core/dist/assign'
import * as pi from 'pareto-core/dist/interface'
import p_list_build_deprecated from 'pareto-core/dist/_p_list_build_deprecated'

//data types

export const remove_last_element = <T extends pi.Value>(list: pi.List<T>): pi.List<T> => {
    const length = pt.number.from.list(list).amount_of_items()
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