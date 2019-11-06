module Utility exposing (swapAt)

{-| Enthaelt allgemeine utility-Funktionen, die zB wegen Problemen nicht aus externen Quellen geladen werden konnten


# Definition

@docs Utility


# Öffentliche Funktionen

@docs swapAt

-}

import List exposing (..)


{-| Swap two values in a list by index. Return the original list if the index is out of range.
If the same index is supplied twice the operation has no effect.
swapAt 1 2 [ 1, 2, 3 ] = [ 1, 3, 2 ]
Uebernommen aus List.Extra, weil es damit Probleme gab
-}
swapAt : Int -> Int -> List a -> List a
swapAt index1 index2 l =
    if index1 == index2 || index1 < 0 then
        l

    else if index1 > index2 then
        swapAt index2 index1 l

    else
        let
            ( part1, tail1 ) =
                splitAt index1 l

            ( head2, tail2 ) =
                splitAt (index2 - index1) tail1
        in
        case ( uncons head2, uncons tail2 ) of
            ( Just ( value1, part2 ), Just ( value2, part3 ) ) ->
                List.concat [ part1, value2 :: part2, value1 :: part3 ]

            _ ->
                l


splitAt : Int -> List a -> ( List a, List a )
splitAt n xs =
    ( take n xs, drop n xs )


uncons : List a -> Maybe ( a, List a )
uncons list =
    case list of
        [] ->
            Nothing

        first :: rest ->
            Just ( first, rest )
