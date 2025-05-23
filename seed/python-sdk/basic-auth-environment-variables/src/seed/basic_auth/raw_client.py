# This file was auto-generated by Fern from our API Definition.

import typing
from ..core.client_wrapper import SyncClientWrapper
from ..core.request_options import RequestOptions
from ..core.http_response import HttpResponse
from ..core.pydantic_utilities import parse_obj_as
from ..errors.errors.unauthorized_request import UnauthorizedRequest
from ..errors.types.unauthorized_request_error_body import UnauthorizedRequestErrorBody
from json.decoder import JSONDecodeError
from ..core.api_error import ApiError
from ..errors.errors.bad_request import BadRequest
from ..core.client_wrapper import AsyncClientWrapper
from ..core.http_response import AsyncHttpResponse
# this is used as the default value for optional parameters
OMIT = typing.cast(typing.Any, ...)
class RawBasicAuthClient:
    def __init__(self, *, client_wrapper: SyncClientWrapper):
        self._client_wrapper = client_wrapper
    
    def get_with_basic_auth(self, *, request_options: typing.Optional[RequestOptions] = None) -> HttpResponse[bool]:
        """
        GET request with basic auth scheme
        
        Parameters
        ----------
        request_options : typing.Optional[RequestOptions]
            Request-specific configuration.
        
        Returns
        -------
        HttpResponse[bool]
        """
        _response = self._client_wrapper.httpx_client.request(
            "basic-auth",method="GET",
            request_options=request_options,)
        try:
            if 200 <= _response.status_code < 300:
                _data = typing.cast(
                    bool,
                    parse_obj_as(
                        type_ =bool,  # type: ignore
                        object_ =_response.json()
                    )
                )
                return HttpResponse(response=_response, data=_data)
            if _response.status_code == 401:
                raise UnauthorizedRequest(headers=dict(_response.headers), body=typing.cast(
                    UnauthorizedRequestErrorBody,
                    parse_obj_as(
                        type_ =UnauthorizedRequestErrorBody,  # type: ignore
                        object_ =_response.json()
                    )
                ))
            _response_json = _response.json()
        except JSONDecodeError:
            raise ApiError(status_code=_response.status_code, headers=dict(_response.headers), body=_response.text)
        raise ApiError(status_code=_response.status_code, headers=dict(_response.headers), body=_response_json)
    
    def post_with_basic_auth(self, *, request: typing.Optional[typing.Any] = None, request_options: typing.Optional[RequestOptions] = None) -> HttpResponse[bool]:
        """
        POST request with basic auth scheme
        
        Parameters
        ----------
        request : typing.Optional[typing.Any]
        
        request_options : typing.Optional[RequestOptions]
            Request-specific configuration.
        
        Returns
        -------
        HttpResponse[bool]
        """
        _response = self._client_wrapper.httpx_client.request(
            "basic-auth",method="POST",
            json=request,
            request_options=request_options,omit=OMIT,
        )
        try:
            if 200 <= _response.status_code < 300:
                _data = typing.cast(
                    bool,
                    parse_obj_as(
                        type_ =bool,  # type: ignore
                        object_ =_response.json()
                    )
                )
                return HttpResponse(response=_response, data=_data)
            if _response.status_code == 401:
                raise UnauthorizedRequest(headers=dict(_response.headers), body=typing.cast(
                    UnauthorizedRequestErrorBody,
                    parse_obj_as(
                        type_ =UnauthorizedRequestErrorBody,  # type: ignore
                        object_ =_response.json()
                    )
                ))
            if _response.status_code == 400:
                raise BadRequest(headers=dict(_response.headers))
            _response_json = _response.json()
        except JSONDecodeError:
            raise ApiError(status_code=_response.status_code, headers=dict(_response.headers), body=_response.text)
        raise ApiError(status_code=_response.status_code, headers=dict(_response.headers), body=_response_json)
class AsyncRawBasicAuthClient:
    def __init__(self, *, client_wrapper: AsyncClientWrapper):
        self._client_wrapper = client_wrapper
    
    async def get_with_basic_auth(self, *, request_options: typing.Optional[RequestOptions] = None) -> AsyncHttpResponse[bool]:
        """
        GET request with basic auth scheme
        
        Parameters
        ----------
        request_options : typing.Optional[RequestOptions]
            Request-specific configuration.
        
        Returns
        -------
        AsyncHttpResponse[bool]
        """
        _response = await self._client_wrapper.httpx_client.request(
            "basic-auth",method="GET",
            request_options=request_options,)
        try:
            if 200 <= _response.status_code < 300:
                _data = typing.cast(
                    bool,
                    parse_obj_as(
                        type_ =bool,  # type: ignore
                        object_ =_response.json()
                    )
                )
                return AsyncHttpResponse(response=_response, data=_data)
            if _response.status_code == 401:
                raise UnauthorizedRequest(headers=dict(_response.headers), body=typing.cast(
                    UnauthorizedRequestErrorBody,
                    parse_obj_as(
                        type_ =UnauthorizedRequestErrorBody,  # type: ignore
                        object_ =_response.json()
                    )
                ))
            _response_json = _response.json()
        except JSONDecodeError:
            raise ApiError(status_code=_response.status_code, headers=dict(_response.headers), body=_response.text)
        raise ApiError(status_code=_response.status_code, headers=dict(_response.headers), body=_response_json)
    
    async def post_with_basic_auth(self, *, request: typing.Optional[typing.Any] = None, request_options: typing.Optional[RequestOptions] = None) -> AsyncHttpResponse[bool]:
        """
        POST request with basic auth scheme
        
        Parameters
        ----------
        request : typing.Optional[typing.Any]
        
        request_options : typing.Optional[RequestOptions]
            Request-specific configuration.
        
        Returns
        -------
        AsyncHttpResponse[bool]
        """
        _response = await self._client_wrapper.httpx_client.request(
            "basic-auth",method="POST",
            json=request,
            request_options=request_options,omit=OMIT,
        )
        try:
            if 200 <= _response.status_code < 300:
                _data = typing.cast(
                    bool,
                    parse_obj_as(
                        type_ =bool,  # type: ignore
                        object_ =_response.json()
                    )
                )
                return AsyncHttpResponse(response=_response, data=_data)
            if _response.status_code == 401:
                raise UnauthorizedRequest(headers=dict(_response.headers), body=typing.cast(
                    UnauthorizedRequestErrorBody,
                    parse_obj_as(
                        type_ =UnauthorizedRequestErrorBody,  # type: ignore
                        object_ =_response.json()
                    )
                ))
            if _response.status_code == 400:
                raise BadRequest(headers=dict(_response.headers))
            _response_json = _response.json()
        except JSONDecodeError:
            raise ApiError(status_code=_response.status_code, headers=dict(_response.headers), body=_response.text)
        raise ApiError(status_code=_response.status_code, headers=dict(_response.headers), body=_response_json)
