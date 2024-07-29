import { TagSection } from '../../../commons';
import { CompactNullableString, CompactString, Int32 } from '../../../primitives';
import { type ReadBuffer } from '../../../serialization';

export class BrokerV10 {
  constructor(
    public readonly nodeId: Int32,
    public readonly host: CompactString,
    public readonly port: Int32,
    public readonly rack: CompactNullableString,
    public readonly tags: TagSection
  ) {}

  public static async deserialize(buffer: ReadBuffer): Promise<BrokerV10> {
    return new BrokerV10(
      await Int32.deserialize(buffer),
      await CompactString.deserialize(buffer),
      await Int32.deserialize(buffer),
      await CompactNullableString.deserialize(buffer),
      await TagSection.deserialize(buffer)
    );
  }
}
