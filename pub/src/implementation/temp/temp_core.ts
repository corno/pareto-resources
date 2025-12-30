import * as _pt from 'pareto-core-transformer'
import * as _pinternals from 'pareto-core-internals'
import * as _pi from 'pareto-core-interface'

export const remove_last_element = <T>(list: _pi.List<T>): _pi.List<T> => {
    const length = list.get_number_of_elements()
    let index = -1
    return _pinternals.build_list(($i) => {
        list.__for_each(($) => {
            index += 1
            if (index < length - 1) {
                $i['add element']($)
            }
        })
    })
}

export const loop = (callback: () => boolean) => {
    while (true) {
        if (callback()) {
            break
        }
    }
}

export const loop_elements = <T>(iterator: _pi.Iterator<T>, callback: ($: T) => boolean) => {
    loop(() => iterator['get current']().transform(
        ($) => callback($),
        () => true
    ))
}

export const build_list_with_loop = <Iterator_Element, List_Element>(
    iterator: _pi.Iterator<Iterator_Element>,
    callback: ($: Iterator_Element, $i: { 'add element': (element: List_Element) => void }) => boolean,
): _pi.List<List_Element> => {
    return _pinternals.build_list(($i) => {
        loop_elements(iterator, ($) => {
            return callback($, {
                'add element': $i['add element']
            })
        })
    })
}

export const build_text_with_loop = (
    iterator: _pi.Iterator<number>,
    callback: ($: number, $i: { 'add character': (char: number) => void }) => boolean,
): string => {
    return _pinternals.build_text(($textBuilder) => {
        loop_elements(iterator, ($) => {
            return callback($, {
                'add character': $textBuilder['add character']
            })
        })
    })
}