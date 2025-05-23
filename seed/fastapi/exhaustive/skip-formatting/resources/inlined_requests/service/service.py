# This file was auto-generated by Fern from our API Definition.

import abc
import functools
import inspect
import logging
import typing

import fastapi
from ....core.abstract_fern_service import AbstractFernService
from ....core.exceptions.fern_http_exception import FernHTTPException
from ....core.route_args import get_route_args
from ...general_errors.errors.bad_request_body import BadRequestBody
from ...types.resources.object.types.object_with_optional_field import ObjectWithOptionalField
from .post_with_object_body import PostWithObjectBody


class AbstractInlinedRequestsService(AbstractFernService):
    """
    AbstractInlinedRequestsService is an abstract class containing the methods that you should implement.
    
    Each method is associated with an API route, which will be registered
    with FastAPI when you register your implementation using Fern's register()
    function.
    """
    
    @abc.abstractmethod
    def post_with_object_bodyand_response(self, *, body: PostWithObjectBody) -> ObjectWithOptionalField:
        """
        POST with custom object in request body, response is an object
        """
        ...
    
    """
    Below are internal methods used by Fern to register your implementation.
    You can ignore them.
    """
    
    @classmethod
    def _init_fern(cls, router: fastapi.APIRouter) -> None:
        cls.__init_post_with_object_bodyand_response(router=router)
    
    @classmethod
    def __init_post_with_object_bodyand_response(cls, router: fastapi.APIRouter) -> None:
        endpoint_function = inspect.signature(cls.post_with_object_bodyand_response)
        new_parameters: typing.List[inspect.Parameter] = []
        for index, (parameter_name, parameter) in enumerate(endpoint_function.parameters.items()):
            if index == 0:
                new_parameters.append(parameter.replace(default=fastapi.Depends(cls)))
            elif parameter_name == "body":
                new_parameters.append(parameter.replace(default=fastapi.Body(...)))
            else:
                new_parameters.append(parameter)
        setattr(cls.post_with_object_bodyand_response, "__signature__", endpoint_function.replace(parameters=new_parameters))
        
        @functools.wraps(cls.post_with_object_bodyand_response)
        def wrapper(*args: typing.Any, **kwargs: typing.Any) -> ObjectWithOptionalField:
            try:
                return cls.post_with_object_bodyand_response(*args, **kwargs)
            except BadRequestBody as e:
                raise e
            except FernHTTPException as e:
                logging.getLogger(f"{cls.__module__}.{cls.__name__}").warn(
                    f"Endpoint 'post_with_object_bodyand_response' unexpectedly threw {e.__class__.__name__}. "
                    + f"If this was intentional, please add {e.__class__.__name__} to "
                    + "the endpoint's errors list in your Fern Definition."
                )
                raise e
        
        # this is necessary for FastAPI to find forward-ref'ed type hints.
        # https://github.com/tiangolo/fastapi/pull/5077
        wrapper.__globals__.update(cls.post_with_object_bodyand_response.__globals__)
        
        router.post(
            path="/req-bodies/object",
            response_model=ObjectWithOptionalField,
            description=AbstractInlinedRequestsService.post_with_object_bodyand_response.__doc__,
            **get_route_args(cls.post_with_object_bodyand_response, default_tag="inlined_requests"),
        )(wrapper)
