# This file was auto-generated by Fern from our API Definition.

from __future__ import annotations

import typing

import pydantic
import typing_extensions
from ...core.pydantic_utilities import IS_PYDANTIC_V2, UniversalBaseModel
from ...core.serialization import FieldMetadata
from .bar import Bar
from .foo import Foo


class FooUnionWithDiscriminant(UniversalBaseModel):
    foo: Foo
    type: typing_extensions.Annotated[typing.Literal["foo"], FieldMetadata(alias="_type")] = "foo"

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(frozen=True)  # type: ignore # Pydantic v2
    else:

        class Config:
            frozen = True
            smart_union = True


class BarUnionWithDiscriminant(UniversalBaseModel):
    bar: Bar
    type: typing_extensions.Annotated[typing.Literal["bar"], FieldMetadata(alias="_type")] = "bar"

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(frozen=True)  # type: ignore # Pydantic v2
    else:

        class Config:
            frozen = True
            smart_union = True


UnionWithDiscriminant = typing.Union[FooUnionWithDiscriminant, BarUnionWithDiscriminant]
