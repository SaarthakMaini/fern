# This file was auto-generated by Fern from our API Definition.

import pydantic
import typing_extensions
from ....core.pydantic_utilities import UniversalBaseModel
from ....core.serialization import FieldMetadata


class Dog(UniversalBaseModel):
    name: str
    likes_to_woof: typing_extensions.Annotated[bool, FieldMetadata(alias="likesToWoof")]

    class Config:
        frozen = True
        smart_union = True
        extra = pydantic.Extra.allow
