import p_ti from 'pareto-core/dist/interface/transformer'
import p_list_from_text from 'pareto-core/dist/implementation/refiner/specials/list_from_text'

//data types
import * as d_out from "../../../../interface/generated/liana/schemas/path_non_normalized/data"
import * as d_in from "pareto-fountain-pen/dist/interface/generated/liana/schemas/text/data"

//dependencies
import * as t_from_list_of_characters from "./list_of_characters"


export const Non_Normalized_Path: p_ti.Transformer<
    d_in.Text,
    d_out.Non_Normalized_Path
> = ($) => t_from_list_of_characters.Non_Normalized_Path(
    p_list_from_text(
        $,
        ($) => $
    )
)