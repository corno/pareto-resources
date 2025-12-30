import * as _pt from 'pareto-core-serializer'

import * as d_in from "../../../interface/generated/pareto/schemas/path/data_types/target"

export const Node_Path = ($: d_in.Node_Path): string => {
    return `${Context_Path($.context)}/${$.node}`
}

export const Context_Path = ($: d_in.Context_Path): string => {
    return _pt.build_text(($i) => {
        _pt.cc($.start, ($) => {
            switch ($[0]) {
                case 'absolute': return _pt.ss($, ($) => {
                    // $i['add character'](47) // '/'
                })
                case 'relative': return _pt.ss($, ($) => {
                    $i['add snippet'](`.`)

                    let k = $['up steps']
                    while (k > 0) {
                        $i['add snippet'](`/..`)
                        k -= 1
                    }
                })
                default: return _pt.au($[0])
            }
        })
        if ($.subpath.get_number_of_elements() === 0 && $.start[0] === 'absolute' ) {
            $i['add snippet'](`/`)
        }
        $.subpath.__for_each(($) => {
            $i['add character'](47) // '/'
            $i['add snippet']($)
        })
    })
}