import * as pt from 'pareto-core/dist/implementation/transformer'
import * as p_i from 'pareto-core/dist/interface/transformer'
import p_list_build_deprecated from 'pareto-core/dist/implementation/specials/list_build_deprecated'
import p_list_from_text from 'pareto-core/dist/implementation/specials/list_from_text'

//data types
import * as d_in from "../../../../interface/generated/liana/schemas/fs_unrestricted_path/data"
import * as d_out from "pareto-fountain-pen/dist/interface/generated/liana/schemas/list_of_characters/data"


export const Node_Path: p_i.Transformer<d_in.Node_Path, d_out.List_of_Characters> = ($) => {
    return pt.literal.nested_list([
        Context_Path($.context),
        [
            47, // '/'
        ],
        p_list_from_text($.node, ($) => $)
    ])
}

export const Context_Path: p_i.Transformer<d_in.Context_Path, d_out.List_of_Characters> = ($) => {
    return p_list_build_deprecated(($i) => {
        pt.decide.state($.start, ($): null => {
            switch ($[0]) {
                case 'absolute': return pt.ss($, ($) => {
                    // $i.add_character(47) // '/'
                    return null
                })
                case 'relative': return pt.ss($, ($) => {
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
                default: return pt.au($[0])
            }
        })
        if (pt.boolean.from.list($.subpath).is_empty() && $.start[0] === 'absolute') {
            $i['add item'](47) // '/'
        }
        $.subpath.__l_map(($) => {
            $i['add item'](47) // '/'
            $i['add list'](p_list_from_text($, ($) => $))
            return null
        })
    })
}