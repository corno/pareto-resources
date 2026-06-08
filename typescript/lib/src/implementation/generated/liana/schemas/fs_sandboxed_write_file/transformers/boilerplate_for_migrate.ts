
import * as _p from 'pareto-core/dist/assign'

import _p_change_context from 'pareto-core/dist/_p_change_context'

import * as t_signatures from "../../../../../../interface/generated/liana/schemas/fs_sandboxed_write_file/signatures/transformers/boilerplate_for_migrate"

import * as t_out from "../../../../../../interface/generated/liana/schemas/fs_sandboxed_write_file/data"

import * as v_path from "../../fs_sandboxed_path/transformers/boilerplate_for_migrate"

import * as v_list_of_characters from "../../list_of_characters/transformers/boilerplate_for_migrate"

import * as v_unrestricted from "../../fs_unrestricted_write_file/transformers/boilerplate_for_migrate"

export const Parameters: t_signatures.Parameters = ($) => ({
    'path': _p_change_context(
        $['path'],
        ($) => v_path.Node_Path(
            $,
        ),
    ),
    'data': _p_change_context(
        $['data'],
        ($) => v_list_of_characters.List_of_Characters(
            $,
        ),
    ),
})

export const Error: t_signatures.Error = ($) => v_unrestricted.Error(
    $,
)
