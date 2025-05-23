/**
 * This file was auto-generated by Fern from our API Definition.
 */
package com.seed.exhaustive.model.types._enum;

import com.fasterxml.jackson.annotation.JsonValue;

public enum WeatherReport {
    SUNNY("SUNNY"),

    CLOUDY("CLOUDY"),

    RAINING("RAINING"),

    SNOWING("SNOWING");

    private final String value;

    WeatherReport(String value) {
        this.value = value;
    }

    @JsonValue
    @java.lang.Override
    public String toString() {
        return this.value;
    }
}
