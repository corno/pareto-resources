import * as _p from 'pareto-core-deserializer'
import * as _pi from 'pareto-core-interface'
import * as _pinternals from 'pareto-core-internals'

import { build_list_with_loop, build_text_with_loop } from '../../../temp/temp_core'

import * as d_out from "../../../../interface/generated/pareto/schemas/path/data_types/target"

export const Non_Normalized_Path = (
    $: string
): d_out.Non_Normalized_Path => {
    return _p.iterate_partially(
        _p.list.from_text($, ($) => $),
        (iterator) => {
            return {
                'leading slash': iterator.look().transform(
                    ($) => {
                        if ($ === 47) { // '/'
                            iterator.discard()
                            return true
                        } else {
                            return false
                        }
                    },
                    () => false
                ),
                'segments': build_list_with_loop<number, d_out.Non_Normalized_Path.segments.L>(iterator, ($, $i) => {
                    $i['add element'](_pinternals.cc(
                        build_text_with_loop(iterator, ($, $i) => {
                            if ($ !== 47) { // '/'
                                $i['add character']($)
                                iterator.discard()
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
                    return iterator.look().transform(
                        ($) => {
                            if ($ !== 47) { // '/'
                                _pinternals.panic(`Expected '/' but got character code ${$}`)
                            }
                            return iterator['look ahead'](1).transform(
                                () => {
                                    // There's more content after the slash, consume and continue
                                    iterator.discard()
                                    return false
                                },
                                () => {
                                    // No more content, this is a trailing slash - don't consume, stop loop
                                    return true
                                }
                            )
                        },
                        () => true
                    )
                }),
                'trailing slash': iterator.look().transform(
                    ($) => {
                        if ($ === 47) { // '/'
                            iterator.discard()
                            return true
                        } else {
                            return false
                        }
                    },
                    () => false
                ),
            }

        }
    )

}
