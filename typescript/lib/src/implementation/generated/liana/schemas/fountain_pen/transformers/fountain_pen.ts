
import * as p_ from 'pareto-core/dist/implementation/transformer'

import * as t_signatures from "../../../../../../interface/generated/liana/schemas/fountain_pen/signatures/transformers/fountain_pen"

import * as v_serialize from "astn-core/dist/implementation/manual/transformers/sealed_target/fountain_pen"

import * as v_marshall from "./astn_sealed_target"

export const Paragraph: t_signatures.Paragraph = ($) => v_serialize.Document(
    v_marshall.Paragraph(
        $,
    ),
)

export const Sentence: t_signatures.Sentence = ($) => v_serialize.Document(
    v_marshall.Sentence(
        $,
    ),
)

export const Phrase: t_signatures.Phrase = ($) => v_serialize.Document(
    v_marshall.Phrase(
        $,
    ),
)
