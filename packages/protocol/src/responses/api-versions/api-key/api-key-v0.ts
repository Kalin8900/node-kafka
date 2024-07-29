import { Int16 } from '../../../primitives';
import { type ReadBuffer } from '../../../serialization';

export class ApiKeyV0 {
  constructor(
    public readonly apiKey: Int16,
    public readonly minVersion: Int16,
    public readonly maxVersion: Int16
  ) {}

  public static async deserialize(buffer: ReadBuffer): Promise<ApiKeyV0> {
    return new ApiKeyV0(
      await Int16.deserialize(buffer),
      await Int16.deserialize(buffer),
      await Int16.deserialize(buffer)
    );
  }
}
