import {Release} from "../release/release";
import {ReleaseType} from "../release-type/release-type";

export class Product {
  constructor(
    public release: Release,
    public releaseType: ReleaseType
  ) {
  }
}
