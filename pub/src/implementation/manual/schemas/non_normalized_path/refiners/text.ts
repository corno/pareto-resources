import * as _p from 'pareto-core/dist/assign'
import * as _pi from 'pareto-core/dist/interface'
import _p_iterate from 'pareto-core/dist/_p_iterate'
import _p_unreachable_code_path from 'pareto-core/dist/_p_unreachable_code_path'
import _p_change_context from 'pareto-core/dist/_p_change_context'
import _p_text_from_list from 'pareto-core/dist/_p_text_from_list'

import { build_list_with_loop } from '../../../../temp/temp_core'

import * as d_out from "../../../../../interface/generated/liana/schemas/path/data"
import * as d_in from "pareto-fountain-pen/dist/interface/to_be_generated/list_of_characters"

export const Non_Normalized_Path = (
    $: d_in.List_of_Characters,
): d_out.Non_Normalized_Path => {
    return _p_iterate(
        $,
        (iterator) => {
            return {
                'leading slash': (() => {
                    const next = iterator.look()
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
                'segments': build_list_with_loop<number, d_out.Non_Normalized_Path.segments.L>(iterator, ($, $i) => {
                    $i['add item'](_p_change_context(
                        _p_text_from_list(
                            build_list_with_loop<number, number>(
                                iterator,
                                ($, $i) => {
                                    if ($ !== 47) { // '/'
                                        $i['add item']($)
                                        iterator.discard(() => null)
                                        return false
                                    } else {
                                        return true
                                    }
                                }
                            ),
                            ($) => $
                        ),
                        ($) => {
                            switch ($) {
                                case "..": return ['parent', null]
                                case ".": return ['current', null]
                                case "": return ['nothing', null]
                                default: return ['child', $]
                            }
                        })
                    )
                    const next = iterator.look()
                    if (next === null) {
                        return true
                    } else {
                        if (next[0] !== 47) { // '/'
                            return _p_unreachable_code_path("the slash was used as a separator, so we should never encounter a non-slash here")
                        } else {
                            const la = iterator.look_ahead(1)
                            if (la === null) {
                                // There's no more content after the slash, this is a trailing slash - don't consume, stop loop
                                return true
                            } else {
                                // There's more content after the slash, consume and continue
                                iterator.discard(() => null)
                                return false
                            }
                        }
                    }
                }),
                'trailing slash': (() => {

                    const next = iterator.look()
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
