import * as _p from 'pareto-core/dist/assign'
import * as _pi from 'pareto-core/dist/interface'
import _p_list_build_deprecated from 'pareto-core/dist/_p_list_build_deprecated'

//data types

export const remove_last_element = <T>(list: _pi.List<T>): _pi.List<T> => {
    const length = _p.number.from.list(list).amount_of_items()
    let index = -1
    return _p_list_build_deprecated(($i) => {
        list.__l_map(($) => {
            index += 1
            if (index < length - 1) {
                $i['add item']($)
            }
        })
    })
}