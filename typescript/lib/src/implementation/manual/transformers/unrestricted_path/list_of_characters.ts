import * as _p from 'pareto-core/dist/assign'
import * as _pi from 'pareto-core/dist/interface'
import _p_list_build_deprecated from 'pareto-core/dist/_p_list_build_deprecated'
import _p_list_from_text from 'pareto-core/dist/_p_list_from_text'

//data types
import * as d_in from "../../../../interface/generated/liana/schemas/fs_unrestricted_path/data"
import * as d_out from "pareto-fountain-pen/dist/interface/generated/liana/schemas/list_of_characters/data"


export const Node_Path: _pi.Transformer<d_in.Node_Path, d_out.List_of_Characters> = ($) => {
    return _p.list.nested_literal_old([
        Context_Path($.context),
        [
            47, // '/'
        ],
        _p_list_from_text($.node, ($) => $)
    ])
}

export const Context_Path: _pi.Transformer<d_in.Context_Path, d_out.List_of_Characters> = ($) => {
    return _p_list_build_deprecated(($i) => {
        _p.decide.state($.start, ($): null => {
            switch ($[0]) {
                case 'absolute': return _p.ss($, ($) => {
                    // $i.add_character(47) // '/'
                    return null
                })
                case 'relative': return _p.ss($, ($) => {
                    $i['add item'](46) // .

                    let k = $['up steps']
                    while (k > 0) {
                        $i['add item'](47) // /
                        $i['add item'](46) // .
                        $i['add item'](46) // .

                        k -= 1
                    }
                    return null
                })
                default: return _p.au($[0])
            }
        })
        if (_p.boolean.from.list($.subpath).is_empty() && $.start[0] === 'absolute') {
            $i['add item'](47) // '/'
        }
        $.subpath.__l_map(($) => {
            $i['add item'](47) // '/'
            $i['add list'](_p_list_from_text($, ($) => $))
            return null
        })
    })
}