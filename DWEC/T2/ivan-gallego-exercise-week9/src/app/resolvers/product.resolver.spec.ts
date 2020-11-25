import { TestBed } from '@angular/core/testing';

import { ProductResolver as ProductResolver } from './product.resolver';

describe('ProductResolverResolver', () => {
  let resolver: ProductResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(ProductResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
