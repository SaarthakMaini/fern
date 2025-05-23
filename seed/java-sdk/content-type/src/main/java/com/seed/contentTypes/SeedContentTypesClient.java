/**
 * This file was auto-generated by Fern from our API Definition.
 */
package com.seed.contentTypes;

import com.seed.contentTypes.core.ClientOptions;
import com.seed.contentTypes.core.Suppliers;
import com.seed.contentTypes.resources.service.ServiceClient;
import java.util.function.Supplier;

public class SeedContentTypesClient {
    protected final ClientOptions clientOptions;

    protected final Supplier<ServiceClient> serviceClient;

    public SeedContentTypesClient(ClientOptions clientOptions) {
        this.clientOptions = clientOptions;
        this.serviceClient = Suppliers.memoize(() -> new ServiceClient(clientOptions));
    }

    public ServiceClient service() {
        return this.serviceClient.get();
    }

    public static SeedContentTypesClientBuilder builder() {
        return new SeedContentTypesClientBuilder();
    }
}
