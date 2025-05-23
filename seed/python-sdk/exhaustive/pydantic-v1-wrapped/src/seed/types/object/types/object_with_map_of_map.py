# This file was auto-generated by Fern from our API Definition.

import typing

import pydantic
import typing_extensions
from ....core.pydantic_utilities import UniversalBaseModel
from ....core.serialization import FieldMetadata


class ObjectWithMapOfMap(UniversalBaseModel):
    map_: typing_extensions.Annotated[typing.Dict[str, typing.Dict[str, str]], FieldMetadata(alias="map")]

    class Config:
        frozen = True
        smart_union = True
        extra = pydantic.Extra.allow
