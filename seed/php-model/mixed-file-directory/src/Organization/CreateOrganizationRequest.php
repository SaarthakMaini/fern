<?php

namespace Seed\Organization;

use Seed\Core\Json\JsonSerializableType;
use Seed\Core\Json\JsonProperty;

class CreateOrganizationRequest extends JsonSerializableType
{
    /**
     * @var string $name
     */
    #[JsonProperty('name')]
    public string $name;

    /**
     * @param array{
     *   name: string,
     * } $values
     */
    public function __construct(
        array $values,
    ) {
        $this->name = $values['name'];
    }

    /**
     * @return string
     */
    public function __toString(): string
    {
        return $this->toJson();
    }
}
