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
from ...errors.errors.property_based_error_test import PropertyBasedErrorTest


class AbstractPropertyBasedErrorService(AbstractFernService):
    """
    AbstractPropertyBasedErrorService is an abstract class containing the methods that you should implement.

    Each method is associated with an API route, which will be registered
    with FastAPI when you register your implementation using Fern's register()
    function.
    """

    @abc.abstractmethod
    def throw_error(self) -> str:
        """
        GET request that always throws an error
        """
        ...

    """
    Below are internal methods used by Fern to register your implementation.
    You can ignore them.
    """

    @classmethod
    def _init_fern(cls, router: fastapi.APIRouter) -> None:
        cls.__init_throw_error(router=router)

    @classmethod
    def __init_throw_error(cls, router: fastapi.APIRouter) -> None:
        endpoint_function = inspect.signature(cls.throw_error)
        new_parameters: typing.List[inspect.Parameter] = []
        for index, (parameter_name, parameter) in enumerate(endpoint_function.parameters.items()):
            if index == 0:
                new_parameters.append(parameter.replace(default=fastapi.Depends(cls)))
            else:
                new_parameters.append(parameter)
        setattr(cls.throw_error, "__signature__", endpoint_function.replace(parameters=new_parameters))

        @functools.wraps(cls.throw_error)
        def wrapper(*args: typing.Any, **kwargs: typing.Any) -> str:
            try:
                return cls.throw_error(*args, **kwargs)
            except PropertyBasedErrorTest as e:
                raise e
            except FernHTTPException as e:
                logging.getLogger(f"{cls.__module__}.{cls.__name__}").warn(
                    f"Endpoint 'throw_error' unexpectedly threw {e.__class__.__name__}. "
                    + f"If this was intentional, please add {e.__class__.__name__} to "
                    + "the endpoint's errors list in your Fern Definition."
                )
                raise e

        # this is necessary for FastAPI to find forward-ref'ed type hints.
        # https://github.com/tiangolo/fastapi/pull/5077
        wrapper.__globals__.update(cls.throw_error.__globals__)

        router.get(
            path="/property-based-error",
            response_model=str,
            description=AbstractPropertyBasedErrorService.throw_error.__doc__,
            **get_route_args(cls.throw_error, default_tag="property_based_error"),
        )(wrapper)
