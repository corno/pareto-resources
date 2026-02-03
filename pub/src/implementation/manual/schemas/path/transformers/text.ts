import * as _p from 'pareto-core/dist/expression'
import _p_text_build_deprecated from 'pareto-core/dist/_p_text_build_deprecated'

import * as d_in from "../../../../../interface/generated/liana/schemas/path/data"

export const Node_Path = ($: d_in.Node_Path): string => {
    return `${Context_Path($.context)}/${$.node}`
}

export const Context_Path = ($: d_in.Context_Path): string => {
    return _p_text_build_deprecated(($i) => {
        _p.decide.state($.start, ($) => {
            switch ($[0]) {
                case 'absolute': return _p.ss($, ($) => {
                    // $i.add_character(47) // '/'
                })
                case 'relative': return _p.ss($, ($) => {
                    $i.add_character(46) // .

                    let k = $['up steps']
                    while (k > 0) {
                        $i.add_character(47) // /
                        $i.add_character(46) // .
                        $i.add_character(46) // .

                        k -= 1
                    }
                })
                default: return _p.au($[0])
            }
        })
        if (_p.boolean.list_is_empty($.subpath) && $.start[0] === 'absolute') {
            $i.add_character(47) // '/'
        }
        $.subpath.__l_map(($) => {
            $i.add_character(47) // '/'
            $i.add_snippet($)
        })
    })
}