import { TagSection } from '../../../../commons';
import { CompactArray, Int16, Int32 } from '../../../../primitives';
import { type ReadBuffer } from '../../../../serialization';

export class PartitionV9 {
  constructor(
    public readonly errorCode: Int16,
    public readonly partitionIndex: Int32,
    public readonly leaderId: Int32,
    public readonly replicaNodes: CompactArray<Int32>,
    public readonly isrNodes: CompactArray<Int32>,
    public readonly offlineReplicas: CompactArray<Int32>,
    public readonly tags: TagSection
  ) {}

  public static async deserialize(buffer: ReadBuffer): Promise<PartitionV9> {
    return new PartitionV9(
      await Int16.deserialize(buffer),
      await Int32.deserialize(buffer),
      await Int32.deserialize(buffer),
      await CompactArray.deserialize(buffer, Int32.deserialize),
      await CompactArray.deserialize(buffer, Int32.deserialize),
      await CompactArray.deserialize(buffer, Int32.deserialize),
      await TagSection.deserialize(buffer)
    );
  }
}
