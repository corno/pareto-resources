
import * as _p from 'pareto-core/dist/assign'

import _p_change_context from 'pareto-core/dist/_p_change_context'

import _p_list_from_text from 'pareto-core/dist/_p_list_from_text'

import _p_variables from 'pareto-core/dist/_p_variables'

import * as t_signatures from "../../../../../../interface/generated/liana/schemas/fs_sandboxed_read_file/signatures/refiners/astn_parse_tree"

import * as t_out from "../../../../../../interface/generated/liana/schemas/fs_sandboxed_read_file/data"

import * as v_unmarshalled_from_parse_tree from "liana-core/dist/implementation/manual/refiners/unmarshalled/astn_parse_tree"

import * as v_parse_tree_to_location from "liana-core/dist/implementation/manual/transformers/parse_tree/start_token_range"

import * as v_external_path from "../../fs_sandboxed_path/refiners/astn_parse_tree"

import * as v_external_list_of_characters from "../../list_of_characters/refiners/astn_parse_tree"

import * as v_external_unrestricted from "../../fs_unrestricted_read_file/refiners/astn_parse_tree"

export const Parameters: t_signatures.Parameters = ($, abort) => v_external_path.Node_Path(
    $,
    ($) => abort(
        $,
    ),
)

export const Result: t_signatures.Result = ($, abort) => v_external_list_of_characters.List_of_Characters(
    $,
    ($) => abort(
        $,
    ),
)

export const Error: t_signatures.Error = ($, abort) => v_external_unrestricted.Error(
    $,
    ($) => abort(
        $,
    ),
)
