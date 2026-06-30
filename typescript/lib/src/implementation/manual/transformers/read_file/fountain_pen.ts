import * as p_ from 'pareto-core/dist/implementation/transformer'
import * as p_i from 'pareto-core/dist/interface/transformer'

import * as d_in from "../../../../interface/generated/liana/schemas/fs_unrestricted_read_file/data"
import * as d_out from "pareto-fountain-pen/dist/interface/generated/liana/schemas/prose/data"

export type Error = p_i.Transformer<
d_in.Error, d_out.Phrase
>


//dependencies
import * as t_path_to_text from "../unrestricted_path/list_of_characters"

//shorthands
import * as sh from "pareto-fountain-pen/dist/shorthands/prose/deprecated"

export const Error: Error = ($) => sh.ph.composed([
    p_.from.state($.type).decide(
        ($) => {
            switch ($[0]) {
                case 'permission denied': return p_.option($, ($) => sh.ph.literal("permission denied"))
                case 'file does not exist': return p_.option($, ($) => sh.ph.composed([
                    sh.ph.literal("file does not exist"),

                ]))
                case 'node is not a file': return p_.option($, ($) => sh.ph.literal("node is not a file"))
                case 'file too large': return p_.option($, ($) => sh.ph.literal("file too large"))
                case 'device not ready': return p_.option($, ($) => sh.ph.literal("device not ready"))
                default: return p_.au($[0])
            }
        }),
    sh.ph.literal(": "),
    sh.ph.serialize(t_path_to_text.Node_Path($.path)),

])