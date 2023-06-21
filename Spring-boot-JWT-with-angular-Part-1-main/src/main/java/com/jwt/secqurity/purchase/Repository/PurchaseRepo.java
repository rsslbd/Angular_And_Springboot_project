package com.jwt.secqurity.purchase.Repository;

import com.jwt.secqurity.purchase.entity.Purchase;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PurchaseRepo extends JpaRepository<Purchase, Long> {
}
