package com.jwt.secqurity.purchase.entity;

import com.jwt.secqurity.product.Entity.BaseModel;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.*;
import java.io.Serializable;
import java.time.LocalDateTime;
import java.util.Objects;

import lombok.Getter;
import lombok.Setter;

@MappedSuperclass
@Getter
@Setter
public class PurchaseBase implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long  purchase_id;

    private Boolean active;

    //    @CreatedDate
    @Column(updatable = false)
    @CreationTimestamp
    private LocalDateTime createdAt;

    private Integer createdBy;

    //    @LastModifiedDate
    @UpdateTimestamp
    private LocalDateTime updatedAt;

    private Integer updatedBy;

    @PrePersist
    public void prePersist() {
//        this.createdAt = LocalDateTime.now();
        this.active = true;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        PurchaseBase baseModel = (PurchaseBase) o;
        return Objects.equals(purchase_id, baseModel.purchase_id) && Objects.equals(active, baseModel.active) && Objects.equals(createdAt, baseModel.createdAt) && Objects.equals(createdBy, baseModel.createdBy) && Objects.equals(updatedAt, baseModel.updatedAt) && Objects.equals(updatedBy, baseModel.updatedBy);
    }

    @Override
    public int hashCode() {
        return Objects.hash(purchase_id, active, createdAt, createdBy, updatedAt, updatedBy);
    }
}