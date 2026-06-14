import * as pi from 'pareto-core/dist/interface'
import * as pt from 'pareto-core/dist/assign'
import p_iterate from 'pareto-core/dist/_p_iterate'
import p_text_from_list from 'pareto-core/dist/_p_text_from_list'

import * as d_out from "../../../../interface/generated/liana/schemas/path_non_normalized/data"
import * as d_in from "pareto-fountain-pen/dist/interface/generated/liana/schemas/list_of_characters/data"

export type Parameters = { 'pedantic': boolean }

//dependencies

export const Non_Normalized_Path = (
    $: d_in.List_of_Characters,
): d_out.Non_Normalized_Path => {
    return p_iterate(
        $,
        null,
        (iterator) => {
            return {
                'leading slash': (() => {
                    const next = iterator.look_raw()
                    if (next === null) {
                        return false
                    } else {
                        if (next[0] === 47) { // '/'
                            iterator.discard(() => null)
                            return true
                        } else {
                            return false
                        }
                    }
                })(),
                'segments': iterator.list({
                    has_more_items: (item) =>
                        item !== 47// '/' //a non-slash -> continue
                        || iterator.look_ahead_raw(1) !== null,  // a slash followed by another item -> continue
                    handle: (item) => {
                        const segment_text = p_text_from_list(
                            iterator.list({
                                has_more_items: (item) => item !== 47, // '/'
                                handle: (item) => {
                                    iterator.discard(() => null)
                                    return item
                                },
                            }),
                            ($) => $
                        )
                        iterator.discard(() => null) // discard the slash or the end of the list
                        switch (segment_text) {
                            case "..": return ['parent', null]
                            case ".": return ['current', null]
                            case "": return ['nothing', null]
                            default: return ['child', segment_text]
                        }
                    }
                }),
                'trailing slash': (() => {
                    const next = iterator.look_raw()
                    if (next === null) {
                        return false
                    } else {
                        if (next[0] === 47) { // '/'
                            iterator.discard(() => null)
                            return true
                        } else {
                            return false
                        }
                    }
                })(),
            }

        }
    )

}
