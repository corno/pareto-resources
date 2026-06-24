import * as p_i from 'pareto-core/dist/interface/production'
import p_text_from_list from 'pareto-core/dist/implementation/transformer/specials/text_from_list'
import p_variables from 'pareto-core/dist/implementation/transformer/specials/variables'

import * as d_out from "../../../../interface/generated/liana/schemas/path_non_normalized/data"

export type Parameters = { 'pedantic': boolean }

//dependencies



export const Non_Normalized_Path: p_i.Production_Without_Error<
    d_out.Non_Normalized_Path,
    number,
    null
> = (iterator) => {
    return {
        'leading slash': p_variables(
            () => {
                const next = iterator.look_raw()
                if (next === null) {
                    return false
                } else {
                    if (next[0] === 47) { // '/'
                        iterator.discard(
                            () => null
                        )
                        return true
                    } else {
                        return false
                    }
                }
            }
        ),
        'segments': iterator.list({
            has_more_items: (item) =>
                item !== 47// '/' //a non-slash -> continue
                || iterator.look_ahead_raw(1) !== null,  // a slash followed by another item -> continue
            handle: (item) => {
                const segment_text = p_text_from_list(
                    iterator.list({
                        has_more_items: (item) => item !== 47, // '/'
                        handle: (item) => {
                            iterator.discard(
                                () => null
                            )
                            return item
                        },
                    }),
                    ($) => $
                )
                iterator.discard( // discard the slash or the end of the list
                    () => null
                )
                switch (segment_text) {
                    case "..": return ['parent', null]
                    case ".": return ['current', null]
                    case "": return ['nothing', null]
                    default: return ['child', segment_text]
                }
            }
        }),
        'trailing slash': p_variables(
            () => {
                const next = iterator.look_raw()
                if (next === null) {
                    return false
                } else {
                    if (next[0] === 47) { // '/'
                        iterator.discard(
                            () => null
                        )
                        return true
                    } else {
                        return false
                    }
                }
            }),
    }

}
