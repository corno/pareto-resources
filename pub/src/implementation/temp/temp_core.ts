import * as _p from 'pareto-core/dist/assign'
import * as _pi from 'pareto-core/dist/interface'
import _p_list_build_deprecated from 'pareto-core/dist/_p_list_build_deprecated'

//data types

export const remove_last_element = <T>(list: _pi.List<T>): _pi.List<T> => {
    const length = _p.number.natural.from.list(list).amount_of_items()
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

export const build_list_with_loop = <Iterator_Element, List_Element>(
    iterator: _pi.Iterator<Iterator_Element>,
    callback: ($: Iterator_Element, $i: { 'add item': (element: List_Element) => void }) => boolean,
): _pi.List<List_Element> => {
    const loop = (callback: () => boolean) => {
    while (true) {
        if (callback()) {
            break
        }
    }
}

    const loop_elements = <T>(iterator: _pi.Iterator<T>, callback: ($: T) => boolean) => {
    loop(() => {
        const next = iterator.look()
        return next === null
            ? true
            : callback(next[0])
    })
}
    return _p_list_build_deprecated(($i) => {
        loop_elements(iterator, ($) => {
            return callback($, {
                'add item': $i['add item']
            })
        })
    })
}