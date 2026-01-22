import * as _p from 'pareto-core/dist/refiner'
import * as _pi from 'pareto-core/dist/interface'
import * as _pd from 'pareto-core/dist/deserializer'

import { build_list_with_loop, build_text_with_loop } from '../../../temp/temp_core'

import * as d_out from "../../../../interface/generated/liana/schemas/path/data"

export const Non_Normalized_Path = (
    $: string
): d_out.Non_Normalized_Path => {
    return _p.iterate(
        _pd.list.from_text($, ($) => $),
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
                    $i['add element'](_p.deprecated_cc(
                        build_text_with_loop(iterator, ($, $i) => {
                            if ($ !== 47) { // '/'
                                $i.add_character($)
                                iterator.discard(() => null)
                                return false
                            } else {
                                return true
                            }
                        }),
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
                           return _p.unreachable_code_path()
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
