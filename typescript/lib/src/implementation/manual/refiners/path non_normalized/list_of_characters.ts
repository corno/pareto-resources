import * as p_t from 'pareto-core/dist/interface/transformer'
import p_iterate from 'pareto-core/dist/implementation/refiner/specials/iterate'

import * as d_out from "../../../../interface/generated/liana/schemas/path_non_normalized/data"
import * as d_in from "pareto-fountain-pen/dist/interface/generated/liana/schemas/list_of_characters/data"

//dependencies
import * as pr_path from "../../productions/path_non_normalized/character"


export const Non_Normalized_Path: p_t.Transformer<
    d_in.List_of_Characters,
    d_out.Non_Normalized_Path
> = ($) => p_iterate({
    list: $,
    end_info: null,
    on_dangling_item: null,
    assign: (iterator) => pr_path.Non_Normalized_Path(iterator)
})